export default function BackToTopButton({ show, backToTop }) {
    if (!show) return null;
    return (
      <button
        onClick={backToTop}
        className="fixed bottom-16 right-8 p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl hover:scale-110 transition z-50"
      >
        ↑
      </button>
    );
  }
  