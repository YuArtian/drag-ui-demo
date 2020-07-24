import Konva from 'konva'
import WebGL2DComponent from '../WebGL2DComponent'

class Button extends WebGL2DComponent {
  constructor(props) {
    super(props)
    console.log('Button props',props)
    //默认文字
    this.text = new Konva.Text({
      text: 'Button',
      fontSize: 12,
      fill: 'white',
      width: 100,
      padding: 10,
      align: 'center',
      verticalAlign: 'center'
    })
    //默认矩形
    this.rect = new Konva.Rect({
      width: this.text.width(),
      height: this.text.height(),
      fill: '#FF5370',
      cornerRadius: 2,
      shadowColor: 'blue',
      shadowOpacity: 0.2,
      shadowBlur: 5,
      shadowOffset: {x: 0, y: 0}
    })
    this.group.add(this.rect);
    this.group.add(this.text);
    //变形
    this.group.on('transform', () => {
      this.rect.setAttrs({
        width: this.rect.width() * this.group.scaleX(),
        height: this.rect.height() * this.group.scaleY()
      });
      this.text.setAttrs({
        width: this.text.width() * this.group.scaleX(),
        height: this.text.height() * this.group.scaleY()
      });
      this.group.setAttrs({
        scaleX: 1,
        scaleY: 1
      });
    });

  }

}

export default Button