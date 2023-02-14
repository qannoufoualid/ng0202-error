import {TestBed} from "@angular/core/testing";
import {FooService} from "./foo.service";
import {BarService} from "./bar.service";

describe('FooServiceTest', () => {
  let fooService: FooService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        FooService,
        BarService
      ]
    })
  );

  beforeEach(() => {
    fooService = TestBed.inject(FooService);
  });

  it('should create fooService', () => {
    expect(fooService).toBeTruthy();
  });
});
