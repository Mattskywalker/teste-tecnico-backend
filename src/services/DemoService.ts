import { Demo } from 'models/model';

export default class DemoService {
  async getAllDemos() {
    return await Demo.findAll();
  }
}
