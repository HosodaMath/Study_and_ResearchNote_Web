/**
 * @author Shingo Hosoda
 * @copyright Shingo Hosoda
 * @license GPLv3
 * @since 2020
 */
class Vector2 {
    /**
     * @constructor
     * @param {number} initX - x座標の初期化
     * @param {number} initY - y座標の初期化
     */
    constructor(initX, initY) {
        this.x = 0;
        this.y = 0;
        this.x = initX;
        this.y = initY;
    }
    /**
     * 現在のx座標を取得
     * @method locationX
     */
    get locationX() {
        return this.x;
    }
    /**
     * 現在のy座標を取得
     * @method locationY
     */
    get locationY() {
        return this.y;
    }
    /**
     * 現在の座標を取得
     * @method location
     */
    get location() {
        return `(${this.x}, ${this.y})`;
    }
    /**
     * 指定したベクトルの座標の取得
     * @method String
     * @param {number} v v is vector value
     *
     */
    String(v) {
        return `(${v.x}, ${v.y})`;
    }
    /**
     * add method
     * @method add
     * @param {Vector2} v - v is vector value
     */
    add(v) {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
        return new Vector2(this.x, this.y);
    }
    /**
     * static add method
     * @static
     * @method add
     * @param {Vector2} v - v is vector value
     * @param {Vector2} w - w is vector value
     */
    static add(v, w) {
        return new Vector2(v.x + w.x, v.y + w.y);
    }
    /**
    * sub method
    * @method sub
    * @param {Vector2} v - v is vector value
    */
    sub(v) {
        this.x = this.x - v.x;
        this.y = this.y - v.y;
        return new Vector2(this.x, this.y);
    }
    /**
     * static sub method
     * @static
     * @method sub
     * @param {Vector2} v - v is vector value
     * @param {Vector2} w - w is vector value
     */
    static sub(v, w) {
        return new Vector2(v.x - w.x, v.y - w.y);
    }
    /**
     * multi method
     * @method multi
     * @param {number} m - m is number
     */
    multi(m) {
        this.x = this.x * m;
        this.y = this.y * m;
        return new Vector2(this.x, this.y);
    }
    /**
     * static multi method
     * @static
     * @method multi
     * @param {Vector2} v - v is vector value
     * @param {number} m - m is number
     */
    static multi(v, m) {
        return new Vector2(v.x * m, v.y * m);
    }
    /**
     * div method
     * @method div
     * @param {number} d - d number
     */
    div(d) {
        this.x = this.x / d;
        this.y = this.y / d;
        return new Vector2(this.x, this.y);
    }
    /**
     * static div method
     * @static
     * @method div
     * @param {Vector2} v - v is vector value
     * @param {number} d - d is number
     */
    static div(v, d) {
        return new Vector2(v.x * d, v.y * d);
    }
}
export { Vector2 };
