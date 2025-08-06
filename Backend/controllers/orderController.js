// import Product from "../models/Product.js";
// import Order from "../models/Order.js";
// import User from "../models/User.js"; // Added to handle user cart clearing
// import stripe from "stripe";

// // Controller to place an order with Cash on Delivery
// // Route: POST /api/order/cod
// export const placeOrderCOD = async (req, res) => {
//   try {
//     const { items, address } = req.body;
//     const userId = req.user.id;

//     if (!userId || !address || !items || items.length === 0) {
//       return res.json({ success: false, message: "Invalid data" });
//     }

//     let amount = 0;
//     for (const item of items) {
//       const product = await Product.findById(item.product);
//       amount += product.offerPrice * item.quantity;
//     }
//     amount += Math.floor(amount * 0.02); // Add 2% tax

//     await Order.create({
//       userId,
//       items,
//       amount,
//       address,
//       paymentType: "COD",
//       isPaid: false,
//     });

//     return res.json({ success: true, message: "Order Placed Successfully" });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// // Controller to place an order with Stripe Online Payment
// // Route: POST /api/order/stripe
// export const placeOrderStripe = async (req, res) => {
//   try {
//     const { items, address } = req.body;
//     const userId = req.user.id;
//     const { origin } = req.headers;

//     if (!address || items.length === 0) {
//       return res.json({ success: false, message: "Invalid data" });
//     }

//     let productData = [];
//     let amount = 0;

//     for (const item of items) {
//       const product = await Product.findById(item.product);

//       productData.push({
//         name: product.name,
//         price: product.offerPrice,
//         quantity: item.quantity,
//       });

//       amount += product.offerPrice * item.quantity;
//     }

//     amount += Math.floor(amount * 0.02); // Add 2% tax

//     const order = await Order.create({
//       userId,
//       items,
//       amount,
//       address,
//       paymentType: "Online",
//       isPaid: false,
//     });

//     const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

//     const line_items = productData.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//         },
//         unit_amount: Math.floor(item.price + item.price * 0.02) * 100,
//       },
//       quantity: item.quantity,
//     }));

//     const session = await stripeInstance.checkout.sessions.create({
//       line_items,
//       mode: "payment",
//       success_url: `${origin}/loader?next=my-orders`,
//       cancel_url: `${origin}/cart`,
//       metadata: {
//         orderId: order._id.toString(),
//         userId,
//       },
//     });

//     return res.json({ success: true, url: session.url });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// // Stripe Webhooks to Verify Payment
// // Route: POST /api/order/stripe
// export const stripeWebhooks = async (request, response) => {
//   const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
//   const sig = request.headers["stripe-signature"];
//   let event;

//   try {
//     event = stripeInstance.webhooks.constructEvent(
//       request.body,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (error) {
//     return response.status(400).send(`Webhook Error: ${error.message}`);
//   }

//   switch (event.type) {
//     case "payment_intent.succeeded": {
//       const paymentIntent = event.data.object;
//       const paymentIntentId = paymentIntent.id;

//       const session = await stripeInstance.checkout.sessions.list({
//         payment_intent: paymentIntentId,
//       });

//       const { orderId, userId } = session.data[0].metadata;

//       await Order.findByIdAndUpdate(orderId, { isPaid: true });

//       await User.findByIdAndUpdate(userId, { cartItems: {} });

//       break;
//     }

//     case "payment_intent.payment_failed": {
//       const paymentIntent = event.data.object;
//       const paymentIntentId = paymentIntent.id;

//       const session = await stripeInstance.checkout.sessions.list({
//         payment_intent: paymentIntentId,
//       });

//       const { orderId } = session.data[0].metadata;

//       await Order.findByIdAndDelete(orderId);

//       break;
//     }

//     default:
//       console.error(`Unhandled event type ${event.type}`);
//   }

//   response.json({ received: true });
// };

// // Route: GET /api/order/user
// export const getUserOrders = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const orders = await Order.find({ userId })
//       .populate("items.product address")
//       .sort({ createdAt: -1 });

//     res.json({ success: true, orders });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// // Route: GET /api/order/seller
// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({
//       $or: [{ paymentType: "COD" }, { isPaid: true }],
//     })
//       .populate("items.product address")
//       .sort({ createdAt: -1 });

//     res.json({ success: true, orders });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

import Product from "../models/Product.js";
import Order from "../models/Order.js";
import User from "../models/User.js";
import stripe from "stripe";

// Controller to place an order with Cash on Delivery
export const placeOrderCOD = async (req, res) => {
  try {
    const { items, address } = req.body;
    const userId = req.user.id;

    if (!userId || !address || !items || items.length === 0) {
      return res.json({ success: false, message: "Invalid data" });
    }

    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      amount += product.offerPrice * item.quantity;
    }
    amount += Math.floor(amount * 0.02); // Add 2% tax

    await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "COD",
      isPaid: false,
    });

    return res.json({ success: true, message: "Order Placed Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Controller to place an order with Stripe Online Payment
export const placeOrderStripe = async (req, res) => {
  try {
    const { items, address } = req.body;
    const userId = req.user.id;
    const { origin } = req.headers;

    if (!address || items.length === 0) {
      return res.json({ success: false, message: "Invalid data" });
    }

    let productData = [];
    let amount = 0;

    for (const item of items) {
      const product = await Product.findById(item.product);

      productData.push({
        name: product.name,
        price: product.offerPrice,
        quantity: item.quantity,
      });

      amount += product.offerPrice * item.quantity;
    }

    amount += Math.floor(amount * 0.02); // Add 2% tax

    const order = await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "Online",
      isPaid: false,
    });

    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

    const line_items = productData.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.floor(item.price + item.price * 0.02) * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripeInstance.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${origin}/loader?next=my-orders`,
      cancel_url: `${origin}/cart`,
      metadata: {
        orderId: order._id.toString(),
        userId,
      },
    });

    return res.json({ success: true, url: session.url });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Stripe Webhooks to Verify Payment
export const stripeWebhooks = async (request, response) => {
  const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
  const sig = request.headers["stripe-signature"];
  let event;

  try {
    event = stripeInstance.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return response.status(400).send(`Webhook Error: ${error.message}`);
  }

  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      });

      const { orderId, userId } = session.data[0].metadata;

      await Order.findByIdAndUpdate(orderId, { isPaid: true });
      await User.findByIdAndUpdate(userId, { cartItems: {} });

      break;
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;

      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      });

      const { orderId } = session.data[0].metadata;
      await Order.findByIdAndDelete(orderId);

      break;
    }

    default:
      console.error(`Unhandled event type ${event.type}`);
  }

  response.json({ received: true });
};

// Get orders for a specific user
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;

    const orders = await Order.find({ userId })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    res.json({ success: true, orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get all orders (admin/seller view)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("items.product address")
      .sort({ createdAt: -1 });

    res.json({ success: true, orders });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};