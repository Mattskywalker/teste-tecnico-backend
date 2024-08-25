import { FrameDTO, IFrameModel } from 'models/interfaces/demos';
import { Demo, Frame } from 'models/model';

export default class DemoService {
  async updateFrame(frame: FrameDTO) {
    try {
      const dbResponse = await Frame.update(
        { html: frame.html },
        {
          where: { id: frame.id },
        },
      );

      return frame;
    } catch (e) {
      throw new Error(`UPDATE FRAME ${e}`);
    }
  }

  async getFrame(frameId: string) {
    try {
      return await Frame.findByPk(frameId);
    } catch (e) {
      throw new Error(`GET FRAME ${e}`);
    }
  }

  async getAllDemos() {
    return await Demo.findAll();
  }

  async getDemoById(demoId: string) {
    return await Demo.findByPk(demoId);
  }

  async getDemoFramesById(demoId: string) {
    try {
      return await Frame.findAll({
        where: {
          demoId,
        },
        order: [['order', 'ASC']],
      });
    } catch (e) {
      console.error(e);
    }
  }
}
