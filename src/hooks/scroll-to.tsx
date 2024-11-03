import { Spring, Tween } from 'framer-motion';

export function useScrollTo(transition?: Spring | Tween) {
  let isStopped = false;

  const onWheel = () => {
    isStopped = true;
    window.removeEventListener('wheel', onWheel);
  };

  const scrollTo = async (target?: Element | number | string | null, offset: number = 0) => {
    let y = 0;

    if (typeof target === 'number') {
      y = target;
    } else if (typeof target === 'string' || target?.nodeType === 1) {
      if (typeof target === 'string') {
        target = document.querySelector(target);
      }
      if (!target) {
        console.error('framer-motion-scroll-to-hook: Element not found');
      } else {
        y = window.scrollY + target.getBoundingClientRect().top;
      }
    }

    y += offset;

    window.addEventListener('wheel', onWheel);
    const { animate } = await import('framer-motion');
    animate(window.scrollY, y, {
      ...transition,
      onComplete: () => {
        isStopped = false;
        window.removeEventListener('wheel', onWheel);
      },
      onUpdate: (value) => {
        if (!isStopped) {
          window.scroll(0, value);
        }
      },
    });
  };

  return scrollTo;
};
