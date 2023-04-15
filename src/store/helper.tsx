import * as React from 'react';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export function usePersistStoreHydration(store: any): boolean {
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    const unsubFinishHydration = store.persist.onFinishHydration(() =>
      setHydrated(true)
    );

    setHydrated(store.persist.hasHydrated());

    return () => {
      unsubFinishHydration();
    };
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return hydrated;
}
