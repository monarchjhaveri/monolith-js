export function componentClicked(moId: string) {
  const component = this.definition.find(item => {
    if (item.moId === moId) return true;
  });

  if (!component) return;

  const newText = window.prompt("What would you like the text to be?", component.properties.text);
  if (newText !== component.properties.text) {
    component.properties.text = newText;
    this.updateApp();
  }
}