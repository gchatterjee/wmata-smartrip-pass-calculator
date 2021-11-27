#!/bin/bash

set -e

cd web
npm run lint
cd -

cd etl
npm run lint
cd -
