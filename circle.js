class Circle {
    constructor(x, y, r, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.vx = vx;
        this.vy = vy;
        this.color = color;

    }

    update(width, height) {
        if (this.x - this.r / 2 + this.vx < 0 || this.x + this.r / 2 + this.vx > width) {
            this.vx = -this.vx;
        }
        if (this.y - this.r / 2 + this.vy < 0 || this.y + this.r / 2 + this.vy > height) {
            this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;
    }
}
