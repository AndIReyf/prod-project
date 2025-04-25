import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
// global.TextDecoder = TextDecoder;
