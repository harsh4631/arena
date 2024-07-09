export default function decorate(block) {
    const [mt, bg, fg] = block.children;
    bg.className = 'bg';
    fg.className = 'fg';
}