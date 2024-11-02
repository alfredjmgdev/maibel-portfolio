const Footer = () => {
    return (
      <footer className="bg-pink-medium dark:bg-pink-deep text-pink-lighter py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Junior QA Tester. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-pink-lighter hover:text-white dark:text-pink-light dark:hover:text-white mx-2">LinkedIn</a>
            <a href="#" className="text-pink-light hover:text-white mx-2">GitHub</a>
            <a href="#" className="text-pink-light hover:text-white mx-2">Twitter</a>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer