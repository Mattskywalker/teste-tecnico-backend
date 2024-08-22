import { Demo, Frame } from 'models/model';

export default class DemoService {
  async getAllDemos() {
    return await Demo.findAll({ include: [{ model: Frame, as: 'frames' }] });
  }
}
