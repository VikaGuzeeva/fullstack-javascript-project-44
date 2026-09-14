#!/usr/bin/env node

import startGame from '../src/index.js';
import { description, generateRound } from '../src/games/calc.js';

startGame(description, generateRound);