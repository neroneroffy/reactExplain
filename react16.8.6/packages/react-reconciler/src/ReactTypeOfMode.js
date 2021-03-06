/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type TypeOfMode = number;
//默认是NoMode 0
export const NoMode = 0b0000;
//1
export const StrictMode = 0b0001;
// TODO: Remove BatchedMode and ConcurrentMode by reading from the root
// tag instead
//2
export const BatchedMode = 0b0010;
//4
export const ConcurrentMode = 0b0100;
//8
export const ProfileMode = 0b1000;
