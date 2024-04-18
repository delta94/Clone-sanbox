import React, { memo } from 'react';
import { r9, nU } from 'some-library'; // Replace 'some-library' with the actual library name
import l from 'lodash/fill';
import o from 'lodash/range';

const Flex = emotion("div")({
    display: "flex",
    flexWrap: "wrap"
});

const StyledGridItem = div_legacy_styled(props => {
    let { theme, flexBasis, itemStyle } = props;
    return {
        flexBasis: flexBasis,
        overflow: "hidden",
        boxSizing: "border-box",
        borderRight: theme.list.gridBorder,
        borderTop: theme.list.gridBorder,
        ...itemStyle
    };
}, {
    lastColumn: {
        borderRight: 0
    }
});

const GridComponent = memo((props) => {
    let { columnCount, items, itemStyle } = props;
    let flexBasis = `${1 / columnCount * 100}%`;
    let extraNullItems = items.length === 0 ? [] : times(constant(columnCount - items.length % columnCount), null);

    return (
        <Flex columnCount={columnCount}>
            {items.concat(extraNullItems).map((item, index) => (
                <StyledGridItem
                    key={`gridItem_${index}`}
                    lastColumn={(index + 1) % columnCount === 0}
                    flexBasis={flexBasis}
                    itemStyle={itemStyle}
                >
                    {item}
                </StyledGridItem>
            ))}
        </Flex>
    );
});

export { GridComponent};
