🚀 StyleCrate – The Modern MERN-Based Fashion Platform ✨

StyleCrate is a feature rich, responsive fashion platform built using the MERN stack (MongoDB, Express.js, React, and Node.js). It is designed to offer an elegant and enjoyable shopping experience for users while giving store managers and admins powerful tools for managing their products, orders, and customers. The platform focuses on speed, usability, and scalability, making it perfect for small boutiques, medium sized fashion stores, or large product catalogs.
Shoppers can browse through carefully organized product categories, filter items based on their preferences, and add them to their carts in just a few clicks. The mobile optimized design ensures that browsing and purchasing are seamless on any device, whether at home on a desktop or on the go with a smartphone.
For store managers, StyleCrate provides an intuitive and easy-to-use dashboard to handle the day-to-day operations. Adding new products, managing inventory, processing orders, and monitoring store performance can all be done in one place. Whether you are a customer looking for your next favorite outfit or an admin managing a growing inventory, StyleCrate ensures a smooth, reliable, and visually pleasing experience for everyone involved.
==============================================================================
🔥 Key Features
For Shoppers
🛍️ Browse Products – Explore items by category, price range, or popularity with visually appealing product cards.
🔍 Search & Filter – Quickly find the exact item you want with multiple filtering options.
🧺 Shopping Cart – Add, remove, and adjust quantities with instant updates.
📱 Mobile-Friendly – Optimized layouts for flawless browsing and shopping on phones and tablets.
💬 Product Details Page – See detailed descriptions, pricing, and product images.

For Store Managers
📦 Product Management – Add, edit, or remove products with full control over details and images.
📊 Dashboard Overview – See store performance, track orders, and view sales statistics at a glance.
✅ Order Management – Manage customer orders, change statuses, and view history.
📤 Image Uploads – Upload and manage high-quality product images using an integrated file upload system.
📑 Category Organization – Group products by style, type, or collection for easy navigation.

For Admins
🔐 Role-Based Access – Secure login system with different permissions for admins, managers, and staff.
🚀 Publish Control – Instantly publish or unpublish products with a single click.
📈 Reports & Analytics – Review performance trends, popular items, and customer engagement.
🛡️ Content Moderation – Approve product listings, descriptions, and images to maintain brand quality.

🛠️ Tech Stack
⚛️ Frontend : React.js + Vite
🎨 Styling : Tailwind CSS
🟢 Backend : Node.js + Express.js
🍃 Database : MongoDB (Mongoose)

==============================================================================
🔧 Installed Dependencies
Frontend Essentials
• Tailwind CSS → npm install tailwindcss @tailwindcss/vite
• React Router → npm install react-router-dom
• Axios → npm install axios
• React Icons → npm install react-icons
• Framer Motion → npm install framer-motion
Backend Core
• Express → npm install express
• Mongoose → npm install mongoose
• JSON Web Tokens → npm install jsonwebtoken
• Bcrypt → npm install bcrypt
• Multer → npm install multer
Dev Tools
• Nodemon → npm install -D nodemon
• ESLint → npm install -D eslint

==============================================================================
▶️ How to Run the StyleCrate Project

📥 Clone the Repository
git clone https://github.com/<your-username>/StyleCrate.git
cd StyleCrate

⚙️ Install Backend Dependencies
cd ../frontend
npm install

🔐 Environment Configuration
backend/.env
# JWT Secret for signing tokens
JWT_SECRET=" your_jwt_secret "

# Application running mode
NODE_ENV = " your_node_env”

# Admin Credentials
SELLER_EMAIL="admin@example.com"
SELLER_PASSWORD="admin1234"

# MongoDB connection string
MONGODB_URI="your_mongodb_connection_string "

# Cloudinary
CLOUDINARY_CLOUD_NAME = '"your_cloudanary_cloud_name"
CLOUDINARY_API_KEY = ''your_cloudanary_api_key''
CLOUDINARY_API_SECRET = ''your_cloudanary_API_secret''

# Stripe Setup
STRIPE_PUBLISHABLE_KEY = ''your_stripe _publishable_key''
STRIPE_SECRET_KEY = ''your_stripe _secret_key''

# Stripe Setup
STRIPE_WEBHOOK_SECRET = ''your_stripe _webhook_secret_key''

# Subcribe Email Setup
ADMIN_EMAIL= ''system _admin_email''
ADMIN_PASS= ''system _admin_password''

frontend/.env

# Currency
VITE_CURRENCY = '$'

# Your Bakcend URL
VITE_BACKEND_URL =  "your_backedn_url"



