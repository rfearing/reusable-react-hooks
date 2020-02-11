import { useState, useRef, useLayoutEffect } from 'react';

/**
 * Determine whether an element is within view on the screen.
 * Uses: IntersectionObserver API.
 * Support is good, but a polyfill may be needed if you need more support than:
 * https://caniuse.com/#search=IntersectionObserver
 *
 * @param Object options
 * - root - The element that is used as the viewport for checking visibility of the target.
 * - rootMargin - Margin around the root.
 * - threshold - Percentage of the target's visibility the observer's callback should be executed.
 * @return Array [ref, isInview] ref should be added to the dom element
 */
const useIsInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();
  useLayoutEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const observer = new IntersectionObserver(([entry]) => {
        setIsInView(entry.isIntersecting);
      }, options);

      if (ref.current) observer.observe(current);
      return () => observer.unobserve(current);
    }
    return null;
  }, [ref, options]);
  return [ref, isInView];
};

export default useIsInView;
