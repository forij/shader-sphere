import App from './App';

const app = new App();
app.init();

requestAnimationFrame(update);
function update(t: number){
    requestAnimationFrame(update);
    app.update(t);
}