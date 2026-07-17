import { Link } from "react-router-dom"; // Correct import for internal links

export default function Footer() {
  return (
    <footer className="w-full min-w-[400px] bg-[#0D7C66] text-white py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} VizAlgo. All rights reserved.</p>
        </div>

        {/* Made by GitHub Profile Button */}
        <div className="mt-2 sm:mt-4 text-center">
          <p className="text-xs sm:text-sm">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/nothingADSR123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-1 sm:mt-2 py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium text-white bg-[#24292F] hover:bg-[#1F4529] rounded-full transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
                className="mr-1 sm:mr-2 sm:w-5 sm:h-5"
              >
                <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38 0-.19-.01-.83-.01-1.5-2.01.44-2.43-.97-2.43-.97-.33-.84-.81-1.07-.81-1.07-.66-.45.05-.44.05-.44.73.05 1.11.75 1.11.75.65 1.11 1.71.79 2.12.6.07-.47.25-.79.45-.97-1.77-.2-3.63-.89-3.63-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.81A7.66 7.66 0 0 1 8 4.5c.68 0 1.36.09 2 .26 1.53-1.02 2.2-.81 2.2-.81.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.86 3.75-3.63 3.95.25.22.47.66.47 1.33 0 .96-.01 1.74-.01 1.98 0 .21.15.46.55.38A8 8 0 0 0 8 0z" />
              </svg>
              <span className="hidden sm:inline">nothingADSR123</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
