/**
 * Convert a { code: name } map into govukSelect items.
 *
 * @param {Object<string, string>} countries - e.g. { GB: "United Kingdom", ... }
 * @param {Object} [options]
 * @param {string} [options.selected] - country code to mark as selected
 * @param {string|false} [options.placeholder] - text for an empty first option, or false for none
 * @param {boolean} [options.sort] - sort alphabetically by name (pinned codes stay on top)
 * @param {string[]} [options.pinned] - codes to keep at the top, in this order
 * @returns {{ value: string, text: string, selected?: boolean }[]}
 */
function toGovukSelectItems(
  countries,
  {
    selected,
    placeholder = "Select a country",
    sort = false,
    pinned = ["GB"],
  } = {},
) {
  let entries = Object.entries(countries);

  if (sort) {
    const pinnedEntries = pinned
      .filter((code) => code in countries)
      .map((code) => [code, countries[code]]);

    const rest = entries
      .filter(([code]) => !pinned.includes(code))
      .sort(([, a], [, b]) => a.localeCompare(b, "en-GB"));

    entries = [...pinnedEntries, ...rest];
  }

  const items = entries.map(([value, text]) => ({
    value,
    text,
    selected: value === selected,
  }));

  if (placeholder) {
    items.unshift({ value: "", text: placeholder, selected: !selected });
  }

  return items;
}

module.exports = { toGovukSelectItems };
