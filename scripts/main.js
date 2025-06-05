import functionalTest, { options as functionalOptions } from './scenario/functionalTest.js';
import loadTest, { options as loadTestOptions } from './scenario/loadTest.js';
import stressTest, { options as stressTestOptions } from './scenario/stressTest.js';
import real_case, { options as real_casetOptions } from './scenario/realCase.js';
import capacityTest, { options as capacityTestOptions } from './scenario/capacityTest.js';

const config = JSON.parse(open('./config/config.json'));

let scenario, scenarioOptions;

switch (config.testToRun) {
  case 'functional':
    scenario = functionalTest;
    scenarioOptions = functionalOptions;
    break;
  case 'load':
    scenario = loadTest;
    scenarioOptions = loadTestOptions;
    break;
  case 'stress':
    scenario = stressTest;
    scenarioOptions = stressTestOptions;
    break;
  case 'realCase':
    scenario = real_case;
    scenarioOptions = real_casetOptions;
    break;
  case 'capacity':
      scenario = capacityTest;
      scenarioOptions = capacityTestOptions;
      break;
  default:
    throw new Error(`Skenario pengujian tidak valid: ${config.testToRun}`);
}

export const options = Object.assign({}, scenarioOptions, {
  summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(25)', 'p(50)', 'p(90)', 'p(95)', 'p(99)'],
});

export default function () {
  scenario(config);
}
