const textarea = document.querySelector('textarea');
const line = document.getElementById('ln');
const column = document.getElementById('col');
const position = document.querySelector('.pos');
const findPos = () => {
    // Get the text up to the cursor position
    const textBeforeCursor = textarea.value.substring(0, textarea.selectionStart);
    
    // Count line breaks to get line number
    const lineNum = (textBeforeCursor.match(/\n/g) || []).length + 1;
  
    // Get index of last line break
    const lastLineStart = textBeforeCursor.lastIndexOf('\n') + 1;
  
    // Calculate column by subtracting last line start index
    const colNum = textarea.selectionStart - lastLineStart + 1;
  
    // Display line and column
    line.innerHTML = lineNum;
    column.innerHTML = colNum;

    position.setAttribute('title', `line ${lineNum},\ncolumn ${colNum}`);
}

textarea.addEventListener('mouseup', findPos);
textarea.addEventListener('input', findPos);