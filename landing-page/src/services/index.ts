import React from 'react';
import {IComment} from '../types';

export const getComments = async (
  setState: React.Dispatch<React.SetStateAction<IComment[] | null>>,
  url: string = '../data/comments.json',
) => {
  try {
    const res: Response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok) throw new Error('Something error with data');

    const {comments}: Awaited<{comments: IComment[]}> = await res.json();

    setState([
      ...comments.sort((a, b) => a.full_name.localeCompare(b.full_name)),
    ]);
  } catch (error) {
    if (error instanceof String) {
      console.log(error);
    }

    console.log((error as Error).message);
  }
};
