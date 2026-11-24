import { useNavigate } from "react-router-dom";

function Header({ cartCount, wishlistCount, activeTab, setActiveTab }) {
  const navigate = useNavigate();

  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <div 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="text-2xl font-black tracking-wider text-emerald-400 group-hover:text-emerald-300 transition">
            JerseyShop
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => navigate('/')}
            className={`text-sm font-medium transition ${
              activeTab === 'shop' ? 'text-emerald-400 font-bold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Home / Shop
          </button>
          <a 
            href="#FeaturedKits" 
            className="text-sm font-medium text-slate-300 hover:text-white transition"
          >
            Featured Kits
          </a>
        </nav>

        <div className="flex items-center gap-4">
          
          <button 
            onClick={() => setActiveTab('wishlist')}
            className={`relative px-3 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1.5 ${
              activeTab === 'wishlist' 
                ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            <span>♥</span>
            <span className="hidden sm:inline">Wishlist</span>
            {wishlistCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => navigate('/cart')}
            className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center gap-2 ${
              activeTab === 'cart' 
                ? 'bg-emerald-500 text-slate-950 font-bold' 
                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
            }`}
          >
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="bg-white text-emerald-950 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;