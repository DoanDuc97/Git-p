let bar = function (game) {
    this.game = game;
    let self = this;

    this.draw = function () {
        self.game.context.drawImage(self.game.resource.bar.img, 0, 100);
    }
}
