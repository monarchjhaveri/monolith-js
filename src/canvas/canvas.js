import CanvasCore from './CanvasCore';
import './canvas.css';
import './components/components.css';

const core = window.CanvasCore = new CanvasCore(document.getElementById('root'));
core.init();

window.addEventListener("message", function({data}) {
  if (!data) return;

  console.log("OK", data.type);
  switch(data.type) {
    case 'UPDATE_APP':
      core.updateApp(data.payload);
    default:
      null;
  }
})