import { Tooltip, IconButton } from '@mui/material';

export function ButtonWithTooltip({title, onClick, children}) {
  return (
    <Tooltip 
      placement="top" 
      arrow 
      title={title}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: 'common.black',
            '& .MuiTooltip-arrow': {
              color: 'common.black',
            },
          },
        },
      }}
    >
      <IconButton onClick={onClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
}