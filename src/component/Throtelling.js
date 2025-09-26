import { useEffect, useState } from "react";

const Throtelling = () => {
  const [showButton, setShowButton] = useState(false);
  function throttle(func, delay) {
    let lastcall = 0;
    return function (...args) {
      console.log("came");

      const now = new Date().getTime();

      if (now - lastcall >= delay) {
        lastcall = now;
        func.apply(this, args);
        console.log("sroll");
      }
    };
  }
  useEffect(() => {
    const handleScroll = (e, sec) => {
      console.log(e, sec);
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    const throttledScroll = throttle(handleScroll, 500);

    window.addEventListener("resize", (e) => throttledScroll(e, "data"));
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("scrolled");
  }
  return (
    <>
      <div style={{ height: "40px" }}>
        <h1>Scroll down</h1>
      </div>
      <div>
        <p>
          Okay, when you're working in CodeSandbox, you can get Lorem Ipsum text
          in the same ways you would in any other web development environment.
          CodeSandbox is essentially a web-based IDE, so many of the same
          techniques apply. Here are the most common ways to get Lorem Ipsum
          text into your CodeSandbox project, building on the general methods
          mentioned before: 1. Using Emmet (Most common and easiest in HTML/JSX
          files) CodeSandbox's editor, like VS Code, has built-in support for
          Emmet abbreviations. This is by far the quickest way to get Lorem
          Ipsum in HTML or JSX. In an HTML file (.html) or JSX (.jsx, .js within
          a React component): Type lorem and press Tab (or Enter in some
          contexts). This will generate a paragraph of Lorem Ipsum text. To
          specify the number of words, type lorem followed by the number and
          press Tab (e.g., lorem20 for 20 words). To generate multiple
          paragraphs, you can use Emmet's multiplication operator: p*3>lorem5
          will create three paragraph elements, each containing 5 words of Lorem
          Ipsum. 2. Copy and paste from an online generator If you need a
          specific amount or structure of Lorem Ipsum that Emmet doesn't easily
          provide: Open your browser to a Lorem Ipsum generator website (e.g.,
          lipsum.com). Generate the desired amount of text (paragraphs,
          sentences, words). Copy the generated text. Switch back to your
          CodeSandbox editor and paste the text into your HTML or JSX. 3. Using
          a React package (for dynamic generation within React) If you need to
          generate Lorem Ipsum text dynamically within your React compon Okay,
          when you're working in CodeSandbox, you can get Lorem Ipsum text in
          the same ways you would in any other web development environment.
          CodeSandbox is essentially a web-based IDE, so many of the same
          techniques apply. Here are the most common ways to get Lorem Ipsum
          text into your CodeSandbox project, building on the general methods
          mentioned before: 1. Using Emmet (Most common and easiest in HTML/JSX
          files) CodeSandbox's editor, like VS Code, has built-in support for
          Emmet abbreviations. This is by far the quickest way to get Lorem
          Ipsum in HTML or JSX. In an HTML file (.html) or JSX (.jsx, .js within
          a React component): Type lorem and press Tab (or Enter in some
          contexts). This will generate a paragraph of Lorem Ipsum text. To
          specify the number of words, type lorem followed by the number and
          press Tab (e.g., lorem20 for 20 words). To generate multiple
          paragraphs, you can use Emmet's multiplication operator: p*3>lorem5
          will create three paragraph elements, each containing 5 words of Lorem
          Ipsum. 2. Copy and paste from an online generator If you need a
          specific amount or structure of Lorem Ipsum that Emmet doesn't easily
          provide: Open your browser to a Lorem Ipsum generator website (e.g.,
          lipsum.com). Generate the desired amount of text (paragraphs,
          sentences, words). Copy the generated text. Switch back to your
          CodeSandbox editor and paste the text into your HTML or JSX. 3. Using
          a React package (for dynamic generation within React) If you need to
          generate Lorem Ipsum text dynamically within your React componOkay,
          when you're working in CodeSandbox, you can get Lorem Ipsum text in
          the same ways you would in any other web development environment.
          CodeSandbox is essentially a web-based IDE, so many of the same
          techniques apply. Here are the most common ways to get Lorem Ipsum
          text into your CodeSandbox project, building on the general methods
          mentioned before: 1. Using Emmet (Most common and easiest in HTML/JSX
          files) CodeSandbox's editor, like VS Code, has built-in support for
          Emmet abbreviations. This is by far the quickest way to get Lorem
          Ipsum in HTML or JSX. In an HTML file (.html) or JSX (.jsx, .js within
          a React component): Type lorem and press Tab (or Enter in some
          contexts). This will generate a paragraph of Lorem Ipsum text. To
          specify the number of words, type lorem followed by the number and
          press Tab (e.g., lorem20 for 20 words). To generate multiple
          paragraphs, you can use Emmet's multiplication operator: p*3>lorem5
          will create three paragraph elements, each containing 5 words of Lorem
          Ipsum. 2. Copy and paste from an online generator If you need a
          specific amount or structure of Lorem Ipsum that Emmet doesn't easily
          provide: Open your browser to a Lorem Ipsum generator website (e.g.,
          lipsum.com). Generate the desired amount of text (paragraphs,
          sentences, words). Copy the generated text. Switch back to your
          CodeSandbox editor and paste the text into your HTML or JSX. 3. Using
          a React package (for dynamic generation within React) If you need to
          generate Lorem Ipsum text dynamically within your React componOkay,
          when you're working in CodeSandbox, you can get Lorem Ipsum text in
          the same ways you would in any other web development environment.
          CodeSandbox is essentially a web-based IDE, so many of the same
          techniques apply. Here are the most common ways to get Lorem Ipsum
          text into your CodeSandbox project, building on the general methods
          mentioned before: 1. Using Emmet (Most common and easiest in HTML/JSX
          files) CodeSandbox's editor, like VS Code, has built-in support for
          Emmet abbreviations. This is by far the quickest way to get Lorem
          Ipsum in HTML or JSX. In an HTML file (.html) or JSX (.jsx, .js within
          a React component): Type lorem and press Tab (or Enter in some
          contexts). This will generate a paragraph of Lorem Ipsum text. To
          specify the number of words, type lorem followed by the number and
          press Tab (e.g., lorem20 for 20 words). To generate multiple
          paragraphs, you can use Emmet's multiplication operator: p*3>lorem5
          will create three paragraph elements, each containing 5 words of Lorem
          Ipsum. 2. Copy and paste from an online generator If you need a
          specific amount or structure of Lorem Ipsum that Emmet doesn't easily
          provide: Open your browser to a Lorem Ipsum generator website (e.g.,
          lipsum.com). Generate the desired amount of text (paragraphs,
          sentences, words). Copy the generated text. Switch back to your
          CodeSandbox editor and paste the text into your HTML or JSX. 3. Using
          a React package (for dynamic generation within React) If you need to
          generate Lorem Ipsum text dynamically within your React componOkay,
          when you're working in CodeSandbox, you can get Lorem Ipsum text in
          the same ways you would in any other web development environment.
          CodeSandbox is essentially a web-based IDE, so many of the same
          techniques apply. Here are the most common ways to get Lorem Ipsum
          text into your CodeSandbox project, building on the general methods
          mentioned before: 1. Using Emmet (Most common and easiest in HTML/JSX
          files) CodeSandbox's editor, like VS Code, has built-in support for
          Emmet abbreviations. This is by far the quickest way to get Lorem
          Ipsum in HTML or JSX. In an HTML file (.html) or JSX (.jsx, .js within
          a React component): Type lorem and press Tab (or Enter in some
          contexts). This will generate a paragraph of Lorem Ipsum text. To
          specify the number of words, type lorem followed by the number and
          press Tab (e.g., lorem20 for 20 words). To generate multiple
          paragraphs, you can use Emmet's multiplication operator: p*3>lorem5
          will create three paragraph elements, each containing 5 words of Lorem
          Ipsum. 2. Copy and paste from an online generator If you need a
          specific amount or structure of Lorem Ipsum that Emmet doesn't easily
          provide: Open your browser to a Lorem Ipsum generator website (e.g.,
          lipsum.com). Generate the desired amount of text (paragraphs,
          sentences, words). Copy the generated text. Switch back to your
          CodeSandbox editor and paste the text into your HTML or JSX. 3. Using
          a React package (for dynamic generation within React) If you need to
          generate Lorem Ipsum text dynamically within your React compon Okay,
          when you're working in CodeSandbox, you can get Lorem Ipsum text in
          the same ways you would in any other web development environment.
          CodeSandbox is essentially a web-based IDE, so many of the same
          techniques apply. Here are the most common ways to get Lorem Ipsum
          text into your CodeSandbox project, building on the general methods
          mentioned before: 1. Using Emmet (Most common and easiest in HTML/JSX
          files) CodeSandbox's editor, like VS Code, has built-in support for
          Emmet abbreviations. This is by far the quickest way to get Lorem
          Ipsum in HTML or JSX. In an HTML file (.html) or JSX (.jsx, .js within
          a React component): Type lorem and press Tab (or Enter in some
          contexts). This will generate a paragraph of Lorem Ipsum text. To
          specify the number of words, type lorem followed by the number and
          press Tab (e.g., lorem20 for 20 words). To generate multiple
          paragraphs, you can use Emmet's multiplication operator: p*3>lorem5
          will create three paragraph elements, each containing 5 words of Lorem
          Ipsum. 2. Copy and paste from an online generator If you need a
          specific amount or structure of Lorem Ipsum that Emmet doesn't easily
          provide: Open your browser to a Lorem Ipsum generator website (e.g.,
          lipsum.com). Generate the desired amount of text (paragraphs,
          sentences, words). Copy the generated text. Switch back to your
          CodeSandbox editor and paste the text into your HTML or JSX. 3. Using
          a React package (for dynamic generation within React) If you need to
          generate Lorem Ipsum text dynamically within your React components
          (e.g., based on props or state), you can install a package that does
          this.
        </p>
      </div>
      {showButton && (
        <button
          onClick={handleScrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "400px",
            padding: "10px 15px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            color: "#fff",
            backgroundColor: "#007bff",
          }}
        >
          Back to Top
        </button>
      )}
    </>
  );
};
export default Throtelling;
