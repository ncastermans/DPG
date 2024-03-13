#!/usr/bin/env python
"""
This script uses npx to execute the TextTest Fixture for TypeScript.
It is designed to be used by TextTest and specified in the file 'texttests/config.gr' in this repo.
It is more convenient for TextTest to use since npx needs
several arguments in addition to the one the TextTest fixture needs.
"""
import os
import subprocess
import sys

args = " ".join(sys.argv[1:])
TEXTTEST_HOME = os.environ.get("TEXTTEST_HOME", os.getcwd())
subprocess.call(["npx", "ts-node", "{}/TypeScript/test/golden-master-text-test.ts".format(TEXTTEST_HOME)] + args.split(), shell=False)