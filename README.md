📚 React Book Search & Favorites App
A dynamic book search application built with React that allows users to search through a collection of books and manage their personal favorites list.

<img width="733" height="687" alt="image" src="https://github.com/user-attachments/assets/2d60ad87-2728-42e8-bc7c-a1c8886885bd" />

✨ Features
	• Real-time Search: Instantly filter books as you type with case-insensitive search
	• Add to Favorites: Build your personal collection of favorite books
	• Remove from Favorites: Manage your favorites list with easy removal
	• Duplicate Prevention: Smart logic prevents adding the same book twice
	• Reusable Components: Modular architecture with reusable List component
	• Responsive UI: Clean and intuitive user interface

🛠️ Technologies Used
	• React - UI library for building component-based interfaces
	• Vite - Fast build tool and development server
	• JavaScript (ES6+) - Modern JavaScript features
	• React Hooks - useState and useEffect for state management and side effects
	• CSS - Styling and layout

🏗️ Architecture
Component Structure
src/
├── App.jsx                 # Main app component, manages global state
├── components/
│   ├── SearchBox.jsx       # Controlled input for search functionality
│   ├── Books.jsx           # Displays filtered book list
│   ├── FavouriteBooks.jsx  # Shows user's favorite books
│   └── List.jsx            # Reusable list component
public/
└── books.json              # Book data source


Key Concepts Demonstrated
	• Component Composition: Breaking down UI into reusable components
	• Props & State Management: Lifting state up and passing data between components
	• Controlled Components: SearchBox uses controlled input pattern
	• Data Fetching: useEffect hook for loading external JSON data
	• Array Methods: filter(), map(), find() for data manipulation
	• Conditional Rendering: Dynamic UI based on state

🚀 Getting Started

Prerequisites
	• Node.js (v14 or higher)
	• npm or yarn

📖 Usage
	1. Search Books: Type in the search box to filter books by title
	2. Add Favorites: Click "Add to favourite" button next to any book
	3. Remove Favorites: Click "Remove" button in the Favorites section
	4. View Results: See real-time updates as you search and manage favorites

🎯 Learning Outcomes
This project demonstrates proficiency in:
	• React fundamentals (components, props, state)
	• React Hooks (useState, useEffect)
	• Event handling and controlled components
	• Asynchronous data fetching
	• Component reusability and composition
	• State lifting and prop drilling patterns
	• Functional programming with array methods

📝 Future Enhancements
	• [ ] Add local storage to persist favorites
	• [ ] Implement sorting options (by title, author, year)
	• [ ] Add book details modal/page
	• [ ] Include book cover images
	• [ ] Add categories/genres filtering
	• [ ] Implement pagination for large datasets
	• [ ] Add animations and transitions
	• [ ] Dark mode toggle
🤝 Contributing
Contributions, issues, and feature requests are welcome!
📄 License
This project is MIT licensed.
👤 Author
Your Name
	• GitHub: @athiyahzakir

⭐ Star this repo if you find it helpful!

You can customize this with your actual GitHub username, add screenshots, or modify the sections based on your preferences! Would you like me to help you create a more specific section or add anything else? 🚀
