#!/bin/bash

read -p 'ga: && gc -m' gaDirVar gcMsgVar
ga $gaDirVar
gc -m "$gcMsgVar"
