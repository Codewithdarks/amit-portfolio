import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

const RiveAvatar = () => {
  const { RiveComponent, rive } = useRive({
    src: '/resources/meeple.riv',  // Updated path to meeple.riv
    stateMachines: 'State Machine 1',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,  // Changed to Contain for better avatar display
      alignment: Alignment.Center,
    }),
  });

  return (
    <div className="rive-avatar-container">
      <RiveComponent 
        className="rive-avatar"
        onMouseMove={(e) => {
          if (rive) {
            const bounds = e.currentTarget.getBoundingClientRect();
            const inputX = (e.clientX - bounds.left) / bounds.width;
            const inputY = (e.clientY - bounds.top) / bounds.height;
            
            // Input names for meeple.riv
            rive.setNumberState('State Machine 1', 'mouseX', inputX);
            rive.setNumberState('State Machine 1', 'mouseY', inputY);
          }
        }}
      />
    </div>
  );
};

export default RiveAvatar;