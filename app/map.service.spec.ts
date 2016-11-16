import { MapService } from './map.service';

describe('MapService', () => {
  beforeEach (() => {
    this.mapService = new MapService();
  });
  it('should have a name for each basemap', () => {
    this.mapService.getBasemaps().forEach((basemap) => {
      expect(basemap.name).toBeDefined();
    });
  })
});