import {Controller, Get} from '@nestjs/common';
import {CounterService} from "./counter.service";

@Controller('counter')
export class CounterController {
    constructor(private counterService: CounterService) {}

    @Get('count')
    async getValue() {
        return this.counterService.getValue();
    }

    @Get('step')
    async getStep() {
        return this.counterService.getStep();
    }
}
