export class TimeLine {
  constructor() {
    this.animations = []
    this.tick = () => {
      let t = Date.now() - this.startTime;
      let animations = this.animations.filter(animation => !animation.finished)
      for (let animation of animations) {
        if (t > animation.duration + animation.delay) {
          continue;
        }
        let { object, property, start, end, timingFunction, template } = animation;

        let progression = timingFunction((t - delay) / duration)

        if (t > animation.duration + animation.delay) {

          progression = 1
          animation.finished = true
        }

        let value = start + progression * (end - start)
        object[property] = template(value)
      }
      if (animations.length) {
        this.requestID = requestAnimationFrame(this.tick
      }

    }
  }
  // tick() {
  //   let t = Date.now() - this.startTime;
  //   let animations = this.animations.filter(animation => !animation.finished)
  //   for(let animation of animations) {
  //     if(t > animation.duration + animation.delay) {
  //       continue;
  //     }
  //     let {object, property, start, end, timingFunction, template} = animation;

  //     let progression = timingFunction((t - delay) / duration)

  //     if (t > animation.duration + animation.delay) {

  //       progression = 1
  //       animation.finished = true
  //     }

  //     let value = start + progression * (end - start)
  //     object[property] =  template(value)
  //   }

  //   requestAnimationFrame(() => this.tick())

  // }

  pause() {
    this.pauseTime = Date.now();
    if(this.requestID !== null) {
      cancelAnimationFrame(this.requestID)
    }
  }

  start() {
    this.startTime = Date.now();
    this.tick()
  }

  add(animation) {
    this.animations.push(animation)
  }
}

export class Animation {
  constructor(object, property, template, start, end, duration, delay, timingFunction) {
    this.object = object
    this.template = template
    this.property = property
    this.start = start
    this.end = end
    this.duration = duration

    this.timingFunction = timingFunction
  }
}


let animation = new Animation(object, property, start, end, duration, delay, timingFunction)
let animation2 = new Animation(object, property, start, end, duration, delay, timingFunction)

let timeLine = new TimeLine();
timeLine.add(animation);
timeLine.add(animation2)

animation.start();
animation2.start();

animation.pause();
animation.resume();
animation.stop();

setTimeout();
setInterval();
requestAnimationFrame();