import React from "react";
import "./styles/Sidebar.css";

export default function SideBar(props) {
  return (
    <div>
      <h3 className="category_title">Categories</h3>
      {props.categories.length !== 0
        ? props.categories.map(category => (
            <ul className="menu_categories">
              <li className="widget">
                <a 
                  className="anchor"
                  id={category.id}
                  onClick={e => props.getRandomByCategory(e)}
                >
                  {category.name}
                </a>
              </li>
            </ul>
          ))
        : null}
    </div>
  );
}
