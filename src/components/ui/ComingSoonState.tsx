import React from 'react';

interface ComingSoonStateProps {
  title?: string;
}

export const ComingSoonState: React.FC<ComingSoonStateProps> = ({
  title = 'Coming Soon',
}) => {
  return (
    <div className="col-12 text-center py-5 my-3">
      <div className="heading">{title}</div>
    </div>
  );
};

export default ComingSoonState;
