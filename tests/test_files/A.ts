import {} from 'path';

function path(c: any): any {

}

@path
class A {
  public x: number;
  public y: number;
  public z: string;

  constructor(x: number, y: number, z: string) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

}
