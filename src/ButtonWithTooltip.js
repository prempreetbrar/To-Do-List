import { Tooltip, IconButton } from '@mui/material';



export function ButtonWithTooltip({title, onClick, children}) {
  /* we want every tooltip to have an arrow, be above the button, and be black.
     it simply renders the child (icon), allowing it to be re-used multiple times
     (the only difference between each button is the text in the tooltip and the icon) */
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