import React,  {useState} from 'react';
import { Link } from 'react-router-dom';
import menuData from '../data/menuData';
import './Menu.css';


function Menu ()  {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const categories = ["All", ...menuData.map((section) => section.category)];

    const filteredData = menuData
    .filter((section) =>
    selectedCategory === "All" ? true: section.category === selectedCategory
)
.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
)
}))
.filter((section) => section.items.length > 0);

    return (
        <section className="menu-section">
        <h1 className='menu-title'>Our Menu</h1>
        <div className='menu-filters'>
            <select 
            className='filter-select'
            value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
    >
{categories.map((cat) => (
    <option key={cat} value={cat}>
        {cat}
    </option>
))}
</select>
<input
type='text'
className='search-input'
placeholder='Search menu'
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/>
        </div>
        {filteredData.lenght === 0 ? (
            <p className='no-results'>No items found.</p>
        ):(
           filteredData.map((section) => (
            <div key={section.category} className='menu-grid'>
              <h2 className='menu-category'>{section.category}</h2> 
              <ul className='menu-items'>
                 {section.items.map((item) => (
                   <li key={item.id} className='menu-item'>
                   <span className='item-name'>{item.name}</span>
                   <span className='item-price'>{item.price}</span>
                   </li>
                ))}
                </ul>
                
            </div>
        ))
    )}
    <p className='fantasy'>
                     Is there a dish you've always fantasized about or dreamed of trying?
                We'd love to know!
                    <p> <a href="https://wa.me/2348068880848"
                    className='whatsapp-button' target="_blank" rel="noreferrer">Click here to share a picture or tell us about it</a></p>
                </p>
     <Link to="/booking">
                 <button className="booking-btn">Place Your Order</button></Link>
    <button className='back-to-top' onClick={scrollToTop}>
                Back to Top
            </button>
        </section> 
        
    );
}

export default Menu;