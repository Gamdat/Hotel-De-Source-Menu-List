import React,  {useState} from 'react';
import menuData from '../data/menuData';
import './Menu.css';


function Menu ()  {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

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
        onchange={(e) => setSelectedCategory(e.target.value)}
    >
{categories.map((cat) => (
    <option key={cat}>{cat}</option>
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
        </section> 
        
    );
}

export default Menu;