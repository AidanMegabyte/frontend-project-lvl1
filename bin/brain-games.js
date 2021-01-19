#!/usr/bin/env node
import { sayWelcome, readUserName, sayHello } from '../src/cli.js';

sayWelcome();
const userName = readUserName();
sayHello(userName);
