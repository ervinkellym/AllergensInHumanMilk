import * as charts from 'echarts';

export function chartable(element, echartOptions) {
    const { theme, renderer, options } = echartOptions;
    const echartsInstance = charts.init(element, theme, { renderer });
    echartsInstance.setOption(options);
    function handleResize() {
        echartsInstance.resize();
    }
    window.addEventListener("resize", handleResize);
    return {
        destroy() {
            echartsInstance.dispose();
            window.removeEventListener("resize", handleResize);
        },
        update(newOptions) {
            echartsInstance.setOption(
                {
                    ...echartOptions.options,
                    ...newOptions.options
                }
            );
        },
    };
}