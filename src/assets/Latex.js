export function parseLatex(containerId) {
  const contentDiv = document.getElementById(containerId);
  if (!contentDiv) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  const laxTags = contentDiv.querySelectorAll("Lax");

  laxTags.forEach((laxTag) => {
    const latexContent = laxTag.textContent.trim();
    const span = document.createElement("span");
    span.className = "latex";
    span.innerHTML = `\\(${latexContent}\\)`;
    laxTag.replaceWith(span);
  });

  // Trigger MathJax rendering
  if (window.MathJax) {
    window.MathJax.typeset();
  } else {
    console.error(
      "MathJax is not loaded. Make sure to include MathJax in your project."
    );
  }
}
