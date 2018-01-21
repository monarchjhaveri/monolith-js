export default class MainCore {
  constructor(iFrame) {
    this.iFrame = iFrame;
    this.definition = [];
  }

  addComponent(definition) {
    this.definition.push(definition);
    this.updateApp(this.definition);
  }

  updateApp(definition) {
    this.iFrame.contentWindow.postMessage({
      type: 'UPDATE_APP',
      payload: definition
    }, '*');
  }

  retarget(iFrame) {
    this.iFrame = iFrame;
  }
}