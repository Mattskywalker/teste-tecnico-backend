import { Demo, Frame } from 'models/model';

export default class DemoService {
  async getAllDemos() {
    return await Demo.findAll();
  }

  async getDemoFramesById(demoId: string) {
    try {
      return await Frame.findAll({
        where: {
          demoId,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}
