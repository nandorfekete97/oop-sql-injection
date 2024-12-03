import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={'./book.png'} alt="Error" className="error-image" />
      <h1>Oops! Something went wrong...</h1>
      <p>Don't worry, even the best of us make mistakes. Try refreshing the page or come back later.</p>
    </div>
  );
};

export default ErrorPage;