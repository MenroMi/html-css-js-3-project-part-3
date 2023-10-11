import {Box, Card} from '..';
import type {IComment} from '../../types';

const Comments = ({comments}: {comments: IComment[] | null}) => {
  return (
    comments &&
    comments.map(({comment, full_name, photo, title}) => (
      <Card
        key={full_name}
        className="bg-testimonial rounded-md px-7 pt-14 pb-7"
      >
        <p className="text-comment">{comment}</p>
        <Box className="flex items-center gap-3 mt-5">
          <Box className="relative rounded-full w-10 h-10 overflow-hidden">
            <img
              className="absolute"
              src={photo}
              alt={`${full_name}'s photo`}
            />
          </Box>
          <Box>
            <h3 className="font-semibold text-sm">{full_name}</h3>
            <p className="text-xs">{title}</p>
          </Box>
        </Box>
      </Card>
    ))
  );
};

export default Comments;
