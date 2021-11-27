#!/bin/bash

set -e

cd web
npm run test
cd -

cd etl
npm run test
cd -
