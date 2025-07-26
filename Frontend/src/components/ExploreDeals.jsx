import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const ExploreDeals = () => {
  const navigate = useNavigate();

  const allDeals = [
    {
      id: 1,
      title: "30% Off on Men's Fashion",
      description: "Elevate your everyday look with trendy menswear.",
      longDescription:
        "Get 30% off on all men's fashion including shirts, jeans, polos, and outerwear. Curated collections crafted for modern comfort and versatile style.",
      image: assets.shirt,
      category: "Men’s Fashion",
      route: "men",
      discount: "30% OFF",
      validUntil: "2025-12-31",
      terms:
        "Minimum cart value {currecy}. Cannot be combined with other offers.",
    },
    {
      id: 2,
      title: "40% Off Women's Tops",
      description: "Effortless style at a fraction of the price.",
      longDescription:
        "Enjoy 40% off on a curated selection of women’s tops, including blouses, tunics, and weekend wear. Discover modern silhouettes for every mood.",
      image: assets.women_tunic_1,
      category: "Women’s Fashion",
      route: "women",
      discount: "40% Off",
      validUntil: "2025-11-30",
      terms:
        "Valid on select styles only. Discount applied at checkout. Limit 3 discounted items per customer.",
    },
    {
      id: 3,
      title: "25% Off on Footwear",
      description: "From casual kicks to party heels all discounted.",
      longDescription:
        "Step up with 25% off across men's and women's footwear. Includes sneakers, boots, sandals, and flats from leading fashion brands.",
      image: assets.leather_loafers_1,
      category: "Footwear",
      route: "footwear",
      discount: "25% OFF",
      validUntil: "2025-12-15",
      terms: "No coupon required. While stock lasts.",
    },
    {
      id: 4,
      title: "Flat 40% Off Ethnic Elegance",
      description: "Celebrate in style with stunning ethnic wear.",
      longDescription:
        "Save 40% on sarees, kurtas, lehengas & festive sets. Handpicked collections for weddings and celebrations.",
      image: assets.chikankari_kurti_1,
      category: "Ethnic Wear",
      route: "ethnic",
      discount: "40% OFF",
      validUntil: "2025-12-10",
      terms: "Offer valid only on ethnic categories. No minimum spend.",
    },
    {
        id: 5,
        title: "Flat 35% Off Kidswear",
        description: "Playful fashion for little ones now 35% more cheerful.",
        longDescription:
          "Get 35% off across our kidswear collection tees, joggers, dresses, and more. Styles for toddlers to pre-teens at unbeatable value.",
        image: assets.romper_1,
        category: "Kids & Babywear",
        route: "kids",
        discount: "35% Off",
        validUntil: "2025-12-20",
        terms: "Valid on select items. Discount applied automatically at checkout.",
      },
    {
      id: 6,
      title: "20% Off on Accessories",
      description: "Add flair to your outfit with chic accessories.",
      longDescription:
        "Grab 20% off on bags, belts, sunglasses, watches, and jewelry. The perfect finishing touches to your look.",
      image: assets.tote_bag_1,
      category: "Accessories",
      route: "accessories",
      discount: "20% OFF",
      validUntil: "2025-12-05",
      terms: "Applicable on all accessory items above $499.",
    },
    {
        id: 7,
        title: "Flat 50% Off Winter Wear",
        description: "Stay warm and stylish – for half the price.",
        longDescription:
          "Enjoy a flat 50% off on our entire winter wear collection – coats, sweaters, mufflers, thermals, and more. Wrap up in cozy fashion while stocks last.",
        image: assets.puffer_jacket_men_1,
        category: "Winter Wear",
        route: "winter",
        discount: "50% Off",
        validUntil: "2025-12-25",
        terms: "All items are final sale. No returns or exchanges.",
      },
      {
        id: 8,
        title: "Flat 33% Off on Trendy Tees",
        description: "Refresh your wardrobe with premium cotton tees.",
        longDescription:
          "Enjoy a flat 33% discount when you shop our graphic, oversized, or basic tees. Unisex styles crafted in breathable cotton – ideal for everyday comfort and style.",
        image: assets.tshirt,
        category: "Men’s Fashion",
        route: "men",
        discount: "33% Off",
        validUntil: "2025-12-18",
        terms: "Valid on select tees only. Discount auto-applied. Limit 6 discounted tees per cart.",
      },
  ];

  const [showAllDeals, setShowAllDeals] = useState(false);
  const displayedDeals = showAllDeals ? allDeals : allDeals.slice(0, 6);

  const handleDealClick = (route) => {
    navigate(`/products/${route}`);
  };

  return (
    <div className="min-h-screen px-4 py-4 md:py-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-10">
          <div className="flex flex-col items-center justify-center mb-4 mt-6 sm:mt-8">
            <div className="relative pb-2 md:pb-1">
              <h1 className="text-neutral-900 font-bold drop-shadow-lg text-2xl md:text-3xl text-center md:mb-2">
                {showAllDeals
                  ? "All Exclusive Deals"
                  : "Exclusive Deals & Offers"}
              </h1>
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-2 md:mt-6 sm:mt-8">
            {showAllDeals
              ? "Browse through all our current offers"
              : "Discover amazing discounts on your favorite Style Crate picks"}
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {displayedDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer"
              onClick={() => handleDealClick(deal.route)}
            >
              <div className="relative h-72 md:h-90 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-fit transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {deal.discount}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <img
                        key={i}
                        className="h-4 w-4 mr-1"
                        src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                        alt=""
                      />
                    ))}

                  <span className="text-sm font-medium text-gray-700 ml-1">
                    ({deal.category})
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                  {deal.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {deal.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-5 py-3 bg-neutral-900 rounded-lg text-white text-center font-medium">
                    Shop Now
                  </span>
                  <div className="flex items-center">
                    <img
                      src={assets.clock_icon}
                      alt="Clock"
                      className="h-3 w-3 mr-1"
                    />
                    <span className="text-xs text-gray-500">
                      Until {deal.validUntil}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More/Less Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAllDeals(!showAllDeals)}
            className="flex items-center mx-auto px-5 py-3.5 border-2 bg-gray-200 transition text-black text-base font-medium rounded-lg duration-200 cursor-pointer"
          >
            {showAllDeals ? "Show Less Deals" : "View All Deals"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreDeals;
